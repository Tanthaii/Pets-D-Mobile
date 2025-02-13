import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import LoginStyles from '../styles/LoginStyles';
import { InputField } from '../components/InputField';
import { ErrorAlert } from '../components/ErrorAlert';
import { SubmitButton } from '../components/SubmitButton';
import { Mail } from 'lucide-react-native';
import { KeyRound } from 'lucide-react-native';


export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Navigate to home or other page
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={LoginStyles.container}>
      <View style={LoginStyles.formContainer}>
        <Text style={LoginStyles.title}>Sign in to your account</Text>

        <InputField
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
          icon={Mail}
        />
        <InputField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          icon={KeyRound}
        />

        <ErrorAlert message={error} />

        <SubmitButton isLoading={isLoading} onPress={handleSubmit} text="Sign in" />

        <TouchableOpacity onPress={() => { /* Navigate to Register */ }}>
          <Text style={LoginStyles.linkText}>Create a new account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
