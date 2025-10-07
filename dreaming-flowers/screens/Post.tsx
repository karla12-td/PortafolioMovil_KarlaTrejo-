import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function Post({ route }) {
  const { post } = route.params;

  return (
    <ScrollView style={styles.contenedor}>
      <View>
        <Text style={styles.tituloPrincipal}>Detalles del Arreglo</Text>

        <View style={styles.card}>
          <Text style={styles.identificador}># {post.id}</Text>
          <Text style={styles.titulo}>{post.title}</Text>
          <Text style={styles.descripcion}>{post.body}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#FFF9F6",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  tituloPrincipal: {
    fontSize: 24,
    fontWeight: "700",
    color: "#A36F9E",
    marginBottom: 25,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  imagen: {
    width: 90,
    height: 90,
    marginBottom: 20,
  },
  identificador: {
    fontSize: 20,
    color: "#A8C686",
    fontWeight: "600",
    marginBottom: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "700",
    color: "#982D61",
    textAlign: "center",
    marginBottom: 15,
  },
  descripcion: {
    fontSize: 16,
    lineHeight: 24,
    color: "#4E4E4E",
    textAlign: "center",
  },
});
