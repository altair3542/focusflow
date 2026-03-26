import { Pressable, Text, StyleSheet } from 'react-native';
import { COLORS, RADIUS } from '../constants/theme';

export default function PrimaryButton({ label }) {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.md,
    paddingVertical: 15,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
