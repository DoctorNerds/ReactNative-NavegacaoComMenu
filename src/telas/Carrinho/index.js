import React from 'react';

import { FlatList } from 'react-native';

import StatusCarrinho from '../../componentes/StatusCarrinho';
import Item from './Item';

const servicos = [
  {
    id: 1,
    nome: "MatrizKIDS",
    preco: 349.90,
    descricao: "KIDS a partir dos 6 anos de idade vão aprender a criar jogos programando com Scratch.",
    quantidade: 1
  },
  {
    id: 2,
    nome: "Matriz4YOU",
    preco: 129.90,
    descricao: "Entusiastas a partir de 50 anos de idade vão aprender a se conectar com a tecnologia, internet e serviços on-line.",
    quantidade: 2
  },
  {
    id: 3,
    nome: "MatrizCast Club",
    preco: 99.9,
    descricao: "Membros do clube do maior podcast de educação do Brasil, terão direito a um conteúdo exclusivo com nossos convidados toda semana e muito mais.",
    quantidade: 1
  }
];

export default function Carrinho() {
  const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

  return <>
    <StatusCarrinho total={total} />
    <FlatList
      data={servicos}
      renderItem={({item}) => <Item {...item}  />}
      keyExtractor={({id}) => String(id)}
    />
  </>
}
