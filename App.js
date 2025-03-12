import React, { useState, useEffect } from 'react'; // useEffect -> novidade
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; // separação de importação de bibliotecas- tem de ser separado para esclarificar o que será puxado do React e o que será do React Native

const App = () => { // 'export default function App' também funciona
  const [temporizador, setTemporizador] = useState(0);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    // arrow-function -> aciona sem ser chamada -- quando o código chegar nela
    let interval;
    if (status == true) {
      interval = setInterval(() => {
        setTemporizador((prev) => prev + 1);
      }, 1000);
    }
    else {
      clearInterval(interval);
    }

    return() => clearInterval(interval);
  }, [status]);

  const habilitar = () => {
    setStatus(!status);
  };

  const reset = () => {
    setTemporizador(0);
    setStatus(false);
  };

  const formatacao = () => {
    const minuto = Math.floor(temporizador / 60);
    const segundos = temporizador % 60;
    return (minuto < 10 ? '0' + minuto : minuto) + ':' + (segundos < 10 ? '0' + segundos : segundos);
  };

  return (
    <View style={styles.corpo}>
      <Text style={styles.cronometo}>{formatacao(temporizador)}</Text>
      <View style={styles.containerbotoes}>
        <TouchableOpacity style={styles.botao} onPress={habilitar}>
          <Text style={styles.textobotao}>{status ? 'Parar' : 'Começar'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={reset}>
          <Text style={styles.textobotao}>Zerar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

};

const styles = StyleSheet.create({

});

export default App; // adicionar depois de tudo para o aplicativo poder ser visualizado

// deepseek é mt bom slk
/*

I've been hearing symphonies
Before, all I heard was silence
A rhapsody for you and me
And every melody is timeless
Life was stringing me along
Then you came and you cut me loose
Was solo, singing on my own
Now I can't find the key without you

And now your song is on repeat
And I'm dancin' on to your heartbeat
And when you're gone, I feel incomplete
So, if you want the truth

I just wanna be part of your symphony
Will you hold me tight and not let go?
Symphony
Like a love song on the radio
Will you hold me tight and not let go?

I'm sorry if it's all too much
Every day you're here, I'm healing
And I was runnin' out of luck
I never thought I'd find this feeling
'Cause I've been hearing symphonies
Before all I heard was silence
A rhapsody for you and me
(A rhapsody for you and me)
And every melody is timeless

And now your song is on repeat
And I'm dancin' on to your heartbeat
And when you're gone, I feel incomplete
So, if you want the truth

I just wanna be part of your symphony
Will you hold me tight and not let go?
Symphony
Like a love song on the radio
Will you hold me tight and not let go?

Ah, ah, ah, ah, ah, ah
Ah ah, ah
Ah, ah, ah, ah, ah, ah
Ah ah, ah

And now your song is on repeat
And I'm dancin' on to your heartbeat
And when you're gone, I feel incomplete
So, if you want the truth (oh)

I just wanna be part of your symphony
Will you hold me tight and not let go?
Symphony
Like a love song on the radio
Symphony
Will you hold me tight and not let go?
Symphony
Like a love song on the radio
Will you hold me tight and not let go?

 */