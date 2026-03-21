import { SafeAreaView, View, Text, Pressable, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.hero}>
          <Text style={styles.badge}>Proyecto integrador</Text>
          <Text style={styles.title}>FocusFlow</Text>
          <Text style={styles.subtitle}>
            Organiza tus tareas, enfoca tus prioridades y construye hábitos
            de productividad desde una experiencia móvil clara y progresiva.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Objetivo de esta app</Text>
          <Text style={styles.cardText}>
            Esta aplicación será la base del curso. En las próximas sesiones
            crecerá para incorporar componentes reutilizables, navegación,
            listas, formularios, estado y persistencia.
          </Text>
        </View>

        <View style={styles.actions}>
          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Comenzar proyecto</Text>
          </Pressable>

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
    backgroundColor: '#F8FAFC',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
    justifyContent: 'space-between',
  },
  hero: {
    gap: 12,
    marginTop: 12,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#DBEAFE',
    color: '#1D4ED8',
    fontSize: 13,
    fontWeight: '700',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#475569',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
  },
  cardText: {
    fontSize: 15,
    lineHeight: 23,
    color: '#475569',
  },
  actions: {
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: '#E2E8F0',
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '700',
  },
});
