import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { auth } from '../lib/firebase';
import RegisterStyles from '../styles/RegisterStyles';
import { RegisterInputField } from '../components/RegisterInputField';
import { RegisterErrorAlert } from '../components/RegisterErrorAlert';
import { RegisterSubmitButton } from '../components/RegisterSubmitButton';
import { Mail, KeyRound, User } from 'lucide-react-native';

export function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (username.length < 3) {
      setError('Username must be at least 3 characters long');
      return;
    }

    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: username });

      const db = getFirestore();
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        username,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });

      // Navigate or show success message
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={RegisterStyles.container}>
      <View style={RegisterStyles.formContainer}>
        <Text style={RegisterStyles.title}>Create your account</Text>

        <RegisterInputField
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
          icon={Mail}
        />
        <RegisterInputField
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          icon={User}
        />
        <RegisterInputField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          icon={KeyRound}
        />
        <RegisterInputField
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          icon={KeyRound}
        />

        <RegisterErrorAlert message={error} />

        <RegisterSubmitButton
          isLoading={isLoading}
          onPress={handleSubmit}
          text="Create account"
        />

        <TouchableOpacity>
          <Text style={RegisterStyles.linkText}>Already have an account? Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
