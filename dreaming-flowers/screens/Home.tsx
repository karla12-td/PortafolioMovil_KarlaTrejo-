import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function Home({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        console.log("Detalles de error", error);
        setLoading(false);
      });
  }, []);

  const renderPost = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Post", { post: item })}
    >
      
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/346/346167.png" }}
        style={styles.cardImage}
      />
      {/* numberOfLines={1} indica cuantas lineas se ven muestran aunque el texto sea más largo */}
      <View style={styles.cardContent}>
        <Text style={styles.tituloPost} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.descripcionPosts} numberOfLines={2}>{item.body}</Text>
        
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#A36F9E" />
        <Text style={styles.loadingText}>Cargando flores...</Text>
      </View>
    );
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.tituloPrincipal}>Dreaming Flowers</Text>
      <Text style={styles.subtitulo}>
        Aquí verás nuestros arreglos florales
      </Text>

      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
        style={styles.listaPosts}
      />
    </View>
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
    fontSize: 26,
    fontWeight: "700",
    color: "#A36F9E", 
    textAlign: "center",
    marginBottom: 5,
  },
  subtitulo: {
    textAlign: "center",
    color: "#7A7A7A",
    marginBottom: 25,
    fontSize: 15,
  },
  listaPosts: {
    flex: 1,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  cardImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  tituloPost: {
    fontSize: 16,
    fontWeight: "600",
    color: "#982D61", 
    marginBottom: 5,
  },
  descripcionPosts: {
    fontSize: 14,
    color: "#4E4E4E",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF9F6",
  },
  loadingText: {
    marginTop: 10,
    color: "#A36F9E",
    fontSize: 16,
  },
  
});
