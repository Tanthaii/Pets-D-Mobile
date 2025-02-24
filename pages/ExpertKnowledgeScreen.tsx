import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import styles from "../styles/chatStyles";
import { fetchAIResponses } from "../utils/fetchAIResponses";

export default function ExpertKnowledgeScreen() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false); // ✅ เพิ่ม loading state

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = { role: "user", content: inputText };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setLoading(true); // ✅ เริ่มโหลด

    try {
      const botReply = await fetchAIResponses(inputText);
      const botMessage = { role: "bot", content: botReply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("❌ Error fetching AI response:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "ขออภัย ระบบมีปัญหา กรุณาลองใหม่อีกครั้ง" },
      ]);
    } finally {
      setLoading(false); // ✅ โหลดเสร็จ
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chat bot</Text>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={
              item.role === "bot"
                ? styles.botMessageWrapper
                : styles.userMessageWrapper
            }
          >
            <Image
              source={
                item.role === "bot"
                  ? require("../assets/intelligence.png")
                  : require("../assets/user.png")
              }
              style={styles.avatar}
            />
            <View
              style={
                item.role === "bot" ? styles.botContainer : styles.userContainer
              }
            >
              <Text style={styles.messageText}>{item.content}</Text>
            </View>
          </View>
        )}
      />

      {/* แสดง Indicator เมื่อกำลังโหลด */}
      {loading && (
        <ActivityIndicator
          size="large"
          color="#36B150"
          style={{ marginBottom: 10 }}
        />
      )}

      {/* Input Box */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity
          onPress={sendMessage}
          style={styles.sendButton}
          disabled={loading}
        >
          <Text style={styles.sendText}>📩</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
