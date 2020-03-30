import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer'
import { Text, Image, View, TouchableOpacity, Linking } from 'react-native';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Detail(){
    const navigation = useNavigation();
    const message = `Olá Amais, estou entrando em contato pois gostaria de ajudar no caso "Campanha de ração" com o valor de R$ 120,00`;
    const phone = '5555555555';
     
    function navigateBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Heroi do caso: Cadelinha atropelada',
            recipients: ['guizstinem@gmail.com'],
            body: message,
        })

    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${phone}&text=${message}`);

    }

    return (
        <View st yle={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>Amais</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Campanha de doação de ração</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                    <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}