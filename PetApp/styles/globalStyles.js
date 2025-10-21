import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 12,
  },
  card: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 12,
    borderRadius: 10,
    elevation: 3, 
  },
  petName: {
    fontSize: 18,
    fontWeight: '700',
  },
  petMeta: {
    fontSize: 14,
    color: '#666',
    marginTop: 6,
  },
  detailsContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff'
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8
  },
  detailsText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6
  }
});

export default styles;
