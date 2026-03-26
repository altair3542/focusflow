import { SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InfoCard from '../components/InfoCard';
import PrimaryButton from '../components/PrimaryButton';
import { COLORS, RADIUS, SPACING } from '../constants/theme';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.hero}>
          <Text style={styles.badge}>Proyecto integrador</Text>
          <Text style={styles.title}>FocusFlow</Text>
          <Text style={styles.subtitle}>
            Organiza tus tareas, enfoca tus prioridades y construye hábitos
            de productividad desde una experiencia móvil clara y progresiva.
          </Text>
        </View>

        <InfoCard
          title="Objetivo de esta app"
          text="Esta aplicación será la base del curso. En las próximas sesiones crecerá para incorporar navegación, listas, estado, formularios y persistencia local."
        />

        <View style={styles.actions}>
          <PrimaryButton label="Comenzar proyecto" />

          <Pressable style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Ver estructura base</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xl,
    justifyContent: 'space-between',
  },
  hero: {
    gap: SPACING.sm,
    marginTop: SPACING.sm,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.primarySoft,
    color: COLORS.primaryText,
    fontSize: 13,
    fontWeight: '700',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: RADIUS.pill,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.muted,
  },
  actions: {
    gap: SPACING.sm,
  },
  secondaryButton: {
    backgroundColor: COLORS.secondarySurface,
    borderRadius: RADIUS.md,
    paddingVertical: 15,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '700',
  },
});
