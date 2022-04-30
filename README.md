# AcquaCooler
Repositório referente ao código fonte do AcquaCooler, trabalho desenvolvido para a disciplina de Projeto Integrador 2 da Universidade de Brasília.

## Instalação

O primeiro passo para conseguir executar o aplicativo no celular, é copiar o diretório do repositório para o computador. Para isso, execute o comando abaixo no terminal:

```
git clone https://github.com/PI2-AirCooler/Code.git
```

Após ter clonado o repositório, será necessário instalar as dependências para que seja possível executar o aplicativo em modo de desenvolvedor. 

A instação poderá ser feita a partir do guia oficial do [React Native](https://reactnative.dev/docs/environment-setup).

### Node.js

A primeira dependência é o Node.js, que permite instalar e gerenciar os pacotes e as bibliotecas do projeto. O Node pode ser instalado fazendo o download a partir do [site oficial](https://nodejs.org/pt-br/download/) ou a partir de linha de comando com base nesse [guia](https://nodejs.org/pt-br/download/package-manager/) que também é disponibiizado pelo site oficial.

### JDK

Após a instalação do Node, será necessário instalar o Java SE Development Kit (JDK). Em um ambiente Linux de distribuição Debian/Ubuntu, poderá ser utilizado o segunte comando:

```
sudo apt-get install openjdk-8-jdk 
```

Caso a distribuição do Linux seja Arch Linux, poderá ser utilizado o comando abaixo:

```
sudo pacman -S jdk8-openjdk
```

### Android SDK

Outra dependência para o desenvolvimento do aplicativo é o Android SDK. Primeiro, deverá ser feito o download e instalação do Android Studio a partir do [site oficial](https://developer.android.com/studio).

Durante a instalação, deverá ser marcado os seguintes itens:

- Android SDK
- Android SDK Plataform
- Android SDK Virtual Device

Depois que a instalação finalizar, será necessário inserir algumas variáveis de ambiente no arquivo de configuração ```$HOME/.bash\_profile ou $HOME/.bashrc```:

```
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```

Após essa configuração, é necessário escrever o seguinte comando, em um terminal, para carregar essas novas variáveis:

```
source $HOME/.bash_profile
```

### Watchman

O Watchman é uma ferramenta para ajudar na performance e compatibilidade. É opcional, mas recomendada pela documentação oficial do React Native. Sua instalação pode ser feita seguindo a documentação disponível [aqui](https://facebook.github.io/watchman/docs/install/#buildinstall).

### React Native

A instalação do React Native poderá ser feita a partir do seguinte comando em um terminal:

```
npx install -g react-native-cli
```

## Execução

Após a instalação de todas as dependências, será possível a execução do aplicativo. Em um terminal, deverá executado o seguinte comando para iniciar o servidor:

```
npx react-native start
```

Em um segundo terminal, deverá ser executado o seguinte comando para abrir o emulador de celular:

```
npx react-native run-android
```
