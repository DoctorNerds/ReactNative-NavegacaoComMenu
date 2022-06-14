
# ⚛️ React Native: Tela de serviços com navegação com menu para o App Escola Matriz

Essa é a aplicação do Fábio Mori após concluir o projeto do curso **Navegação com menu e suporte às telas** da formação em **React Native** na [Alura](https://www.alura.com.br/).

## 📱 Projeto

Neste projeto foi aplicado todo aprendizado para fazer uma tela de serviços e carrinho de compra para o aplicativo da Escola Matriz, uma edtech que ensina e fala sobre tecnologia para crianças e jovens.

**INSERIR PRINTS DAS TELAS AQUI!**

## 🧑‍💻 Técnicas e Tecnologias

As técnicas e tecnologias ensinadas pela [Alura](https://www.alura.com.br/) no projeto são:

- `Node.js`: interpretador Java Script.
- `Expo`: biblioteca Node.js
- `React Navigation`: uma biblioteca no React Natuve que nos permite uma navegação de forma muito simplificada.
- `Reactron`: uma ferramenta de debug que vai nos ajudar a ver os logs da nossa aplicação.
- `Visual Studio Code`: um dos mais populares editores de código fonte, possível de utilizar para quase todas linguagens.

## 📲 O aprendizado do aluno Fábio Mori
### Indrodução da história.

O Expo é um *framework* e uma plataforma para aplicações React universais. É um conjunto de ferramentas e serviços construídos em torno de plataformas nativas de React Native que ajudam você a desenvolver, construir e implantar rapidamente em aplicativos iOs, Android e web a partir da mesma base de código Java Script e Type Script.

A diferença entre React Native e Expo (utilizado neste projeto), já que o segundo não necessita da instalação do ambiente Java com Android Studio ou Xcode, pois ele é enviado diretamente ao aplicativo do Expo instalado no celular que já inclui os códigos nativos necessários. A desvantagem da utilização do Expo é que existem funcionalidades no React Native que ainda não são suportadas no Expo, além dos aplicativos ocuparem pouco mais de espaço na memória do celular do que aplicações nativas com o React Native. Porém, como a configuração e desenvolvimento com o Expo é mais simples, é uma ótima opção para quem está começando a aprender essa tecnologia, assim como eu, além de poder ser um melhor custo benefício em algumas aplicações também.

Partindo para o desenvolvimento, instalei e configurei o ambiente de programação para criar a aplicação em **React Native**. O software utilizado para programar foi o **Visual Code** e utilizei o **Android Studio** como emulador durante o desenvolvimento, assim como aprendi a utilizar o próprio aplicativo para mobile **Expo Go** como emulador também.  

Segui todos os passos explicados durante as aulas do curso **React Native: Navegação com menu e suporte às telas** da [Alura](https://www.alura.com.br/) e desenvolvi esta aplicação da forma como foi instruído pela @nataliakt. Após a conclusão do curso apliquei o mesmo programa, fazendo as alterações necessárias e aplicando o aprendizado para o meu objetivo que é criar um aplicativo para os serviços da minha edtech, a Escola Matriz.

### Tags e comandos React Native

- `<></>`: o fragmento é como se fosse uma tag, só que ele não tem nada dentro e não precisa ser importado. Ele permite agrupar componentes no código.
- `Biblioteca para moedas`: já temos no java uma biblioteca para moedas, basta ir no terminal, na pasta do projeto e instalar:
   - `npm install intl`
   - No `App.js`:
    ```
      import 'intl';
      import 'intl/locale-data/jsonp/pt-BR';
    ````
   - Agora quando for utilizar não precisa importar, já que ela é uma biblioteca do Java Script. Veja um exemplo:
   ```
   <Text>{
      intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
      }).format(variavel)
         } 
   </Text>
   ```
   
    
   

### Outras coisas importantes

- **app.json**: é um arquivo exclusivo do Expo e não vai existir no React Native normal
- **Alterar nome, ícone e splash screen da aplicação**: para alterarmos o nome da exibição da aplicação, a splash screen e o ícone da aplicação, precisamos:
   - Alterar o nome, o slug e o backgroundColor da splash dentro do `app.json` e substituir as imagens `icon.png` e `splash.png` dentro da pasta *assets*.
   - Reiniciar a aplicação e ver as alterações.
- **Para usar as tags**: precisamos importar: `React from 'react';`
- **Estilo como uma função**: Algumas vezes, quando precisamos estilizar os nossos componentes, o estilo pode ser uma função, onde vamos ter que definir seus parâmetros de entrada e importá-lo no arquivo que iremos utilizá-lo.
- 


### Conceitos aprendidos


### ▶️ Rodando o Projeto

Com a pasta do projeto no computador, primeiro instalar as dependências:
```
npm install
```

Em seguida iniciar o projeto:
```
npm start
```
