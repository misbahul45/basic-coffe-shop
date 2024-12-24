import { View, Text, StyleSheet, ImageBackground, Pressable, Dimensions } from 'react-native';
import image1 from '@/assets/images/image-1.jpg';
import { Link } from 'expo-router';

const Home = () => {

  return (
    <View style={styles.container}>
      <ImageBackground source={image1} style={styles.image}>
        <View style={styles.overlay}>
          <Text style={[styles.title, {fontSize: 42 }]}>Coffee Shop</Text>
          <View style={styles.buttonContainer}>
            <Link href="/explore" asChild>
              <Pressable
                style={styles.button1}
              >
                <Text style={styles.buttonText}>Explore</Text>
              </Pressable>
            </Link>
            <Link href="/contact" asChild>
              <Pressable
                style={styles.button2}
              >
                <Text style={styles.buttonText}>Contact</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },
  button1: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
    backgroundColor: 'black',
    marginHorizontal: 5, 
  },
  button2: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.8)',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
