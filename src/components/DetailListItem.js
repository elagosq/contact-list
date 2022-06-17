import React,{useContext} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { ThemeContext } from '../context/theme/theme-context';

export default function DetailListItem({ icon, title, subtitle }) {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.borderContainer}>
      <View style={[styles.wrapper,{ borderBottomColor : theme.contactInfoBorderBottom }]}>
        <View style={styles.container}>
          {icon && (
            <MaterialIcons
              name={icon}
              size={24}
              style={{
                color: theme.headerIcon,
                marginRight: 20,
              }}
            />
          )}
          <View style={[styles.contentContainer,{backgroundColor:theme.backgroundColor}]}>
            <Text style={[styles.title,{color:theme.headerTitle}]}>{title}</Text>
            {subtitle && <Text style={styles.subtitle,{color:theme.headerTitle}}>{subtitle}</Text>}
          </View>
        </View>
      </View>
    </View>
  );
}

DetailListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

DetailListItem.defaultProps = {
  icon: null,
  subtitle: null
};

const styles = StyleSheet.create({
  borderContainer: {
    paddingHorizontal: 20,
  },
  wrapper: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomWidth: 1.5,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 15,
    marginTop: 4,
  },
});
