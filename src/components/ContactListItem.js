import React,{ useContext } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { ThemeContext } from '../context/theme/theme-context';
import colors from '../utils/colors';

export default function ContactListItem({
  name, avatar, phone, onPress,
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableHighlight
      underlayColor={theme.rowClickBackgroundColor}
      style={styles.container}
      onPress={onPress}
    >
      <View style={[styles.contactInfo,{ borderBottomColor : theme.contactInfoBorderBottom }]}>
        <Image
          style={styles.avatar}
          source={{
            uri: avatar,
          }}
        />
        <View style={styles.details}>
          <Text style={[styles.title,{color: theme.titleDetails}]}>{name}</Text>
          <Text style={[styles.subtitle,{color:theme.subTitleDetails}]}>{phone}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  contactInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomWidth: 1.5,
  },
  avatar: {
    borderRadius: 22,
    width: 44,
    height: 44,
  },
  details: {
    justifyContent: 'flex-start',
    flex: 1,
    marginLeft: 20,
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    color: colors.blue,
    fontSize: 15,
    marginTop: 4,
  },
});
