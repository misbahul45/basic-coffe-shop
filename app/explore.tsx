import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import React from 'react';
import coffeeProducts from '@/constants/Coffe';

const Explore = () => {
  const [products, setProducts] = React.useState(coffeeProducts);
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    const filteredProducts = searchQuery
      ? coffeeProducts.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : coffeeProducts;

    setProducts(filteredProducts);
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Our Product</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery} // Menggunakan onChangeText untuk efisiensi
      />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()} // Menambahkan keyExtractor untuk item unik
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // Mengubah untuk membuat konten lebih fleksibel
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Memperbaiki latar belakang untuk lebih terlihat
    padding: 20, // Menambahkan padding untuk jarak antar elemen
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 20, // Memberikan jarak antara judul dan daftar produk
  },
  productContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: '100%', // Mengatur agar lebar setiap item menyesuaikan layar
    shadowColor: '#000', // Menambahkan bayangan untuk tampilan lebih menarik
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
    color: '#555',
  },
  searchInput: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'white', // Memberikan latar belakang putih agar teks lebih jelas
  },
});

export default Explore;
