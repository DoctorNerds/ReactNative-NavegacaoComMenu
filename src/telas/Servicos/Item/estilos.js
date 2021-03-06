import { StyleSheet } from 'react-native';
import { cores } from '../../../estilos';

export default StyleSheet.create({
  informacao: {
    padding: 24
  },
  nome: {
    color: cores.verdeMatriz,
    fontWeight: 'bold',
    fontSize: 28,
  },
  calculo: {
    color: cores.escuro,
    fontSize: 14,
    marginVertical: 8,
  },
  preco: {
    color: cores.pretoMatriz,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  divisor: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: cores.cinza,
  },
  carrinho: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  valor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  descricao: {
    color: cores.escuro,
    fontSize: 18,
    marginRight: 8,
    fontSize: 18,
  },
  quantidade: {
    width: 42,
    fontSize: 16,
  }
});
