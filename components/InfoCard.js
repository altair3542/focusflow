import { View, Text, StyleSheet } from 'react-native'
import {  COLORS, RADIUS, SPACING } from '../constants/theme'

export default function InfoCard({ title, text }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
  },
  text: {
    fontSize: 15,
    lineHeight: 23,
    color: COLORS.muted,
  },
});
