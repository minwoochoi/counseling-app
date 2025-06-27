import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>연애상담 앱</Text>
      <Text style={styles.subtitle}>지금 당신의 연애 고민을 들어줄게요</Text>
      <Button title="시작하기" onPress={() => router.push('/onboarding')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#777',
    marginBottom: 32,
    textAlign: 'center',
  },
});
