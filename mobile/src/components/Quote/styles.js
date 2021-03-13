import { StyleSheet } from 'react-native';
import { mainTheme, appFonts } from '../../constants';

const styles = StyleSheet.create({
  quoteText: {
    fontFamily: appFonts.regular,
    fontSize: 22,
    textAlign: 'center',
    color: mainTheme.primaryDark,
    marginTop: 0,
    marginBottom: 30,
    paddingHorizontal: 1,
  }
});

export default styles;