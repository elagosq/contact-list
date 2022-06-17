import React,{ useContext } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from '../context/theme/theme-context';

import PropTypes from 'prop-types';

export default function ContactThumbnail({
  name,
  phone,
  avatar,
  onPress,
}) {
  const { theme } = useContext(ThemeContext);
 const ImageComponent = onPress ? TouchableOpacity : View;

  return (
    <View style={styles.container}>
      <ImageComponent onPress={onPress}>
        <Image
          source={{
            uri: avatar,
          }}
          style={styles.avatar}
        />
      </ImageComponent>
      {name !== '' && <Text style={[styles.name, {color:theme.headerTitle}]}>{name}</Text>}

      {phone !== '' && (
        <View style={styles.phoneSection}>
          <MaterialIcons name="phone" size={16} style={{ color: theme.headerIcon }} />
          <Text style={[styles.phone, {color:theme.headerTitle}]}>{phone}</Text>
        </View>
      )}
    </View>
  );
}

ContactThumbnail.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  phone: PropTypes.string,
  onPress: PropTypes.func,
};

ContactThumbnail.defaultProps = {
  name: '',
  phone: '',
  onPress: null,
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: 'white',
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  phoneSection: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
