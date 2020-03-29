import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import LogoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Profile(){
    const [incidents, setIncidents] = useState([]);


    //User session data
    const history = useHistory();
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    async function handleProfile() {
        try {
            const response = await api.get('profile', {
                headers: {
                    Authorization: ongId
                }
            });

            setIncidents(response.data);
            
        } catch (error) {
            alert('Falha para puxar os casos, tente novamente mais tarde.');
            console.log(error);
        }
    }

    /**
     * Delete the incident by givigin the ID;
     * 
     * @param {int} id 
     */
    async function handleDelete(id) {
        try {

            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
            
        } catch (error) {
            alert('Falha para deletar caso, tente novamente.');
        }

    }

    const handleLogOut = () => {
        localStorage.clear();

        history.push('/');
    }

    useEffect(() => {
        handleProfile()
    }, [ongId])

    return (
        <div className="profile-container">
            <header>
                <img src={LogoImg} alt="Be The Hero"/>
                <span>Olá, {ongName}</span>
                <Link to="/incidents/new" className="button">Cadastrar um novo caso.</Link>
                <button onClick={handleLogOut} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(incident.value)}</p>

                        <button onClick={() => handleDelete(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}