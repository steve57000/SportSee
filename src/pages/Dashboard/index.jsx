import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HousingService from '../../Hooks';

import KeyData from '../../components/KeyData';
import {
    Activity,
    Calories,
    Container,
    Glucides,
    Infos,
    KPI, Lipides,
    Objectif,
    Proteines,
    Radar,
    Titles
} from "./styles";
import {LineChart} from "../../components/LineChart";
// import Loader from '../../components/Loader/Loader';


function DashboardHome() {
    // State (état, données)
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorCall, setErrorCall] = useState(false);
    const [userInfo, setUserInfo] = useState([]);
    const [userKeyData, setUserKeyData] = useState([])

    // Comportement
    useEffect(() => {
        let dataUser
        HousingService.getUserId(id)
        .then((userData) => {
            dataUser = userData;
        })
        .catch((err) => {
            setError(true);
        })
        .finally(() => {
            setLoading(false);
            // if url have bad id or name redirect to 404
            if (!dataUser) {
                setErrorCall(true);
            } else {
                setData(dataUser);
                setUserInfo(dataUser.userInfos);
                setUserKeyData(dataUser.keyData);
            }
        });
    }, [id]);

    const {firstName} = userInfo
    const { calorieCount, proteinCount, carbohydrateCount, lipidCount} = userKeyData

    if (error) {
        return <h2 className="text-center">Oups il y a eu un problème</h2>;
    }

    // affichage (render)
    return (
        // <div className={'Dashboard'} style={{ width: '100%', height: '100%', gridArea: 'Dashboard' }}>
            <Container className={'Container'}>
                <Titles className="Title">
                    <h1>
                        Bonjour <span style={{color : 'red'}}>{firstName ? firstName : null}</span>
                    </h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </Titles>
                <Activity className={'Activity'}>
                    <p>Activité quotidienne</p>
                    <div>
                        <div>
                            <span></span>
                            <span>Poids (kg)</span>
                        </div>
                        <div>
                            <span></span>
                            <span>Calories brûlées (kCal)</span>
                        </div>
                    </div>
                </Activity>
                <Infos className={'Infos'}>
                    <Calories className={'Calories'}>
                        <KeyData
                            dataCard={calorieCount}
                            dataName='Calories'
                            key={`Calories-${id}`}
                        />
                    </Calories>
                    <Proteines className={'Proteines'}>
                        <KeyData
                            dataCard={proteinCount}
                            dataName='Proteines'
                            key={`Proteines-${id}`}
                        />
                    </Proteines>
                    <Glucides className={'Glucides'}>
                        <KeyData
                            dataCard={carbohydrateCount}
                            dataName='Glucides'
                            key={`Glucides-${id}`}
                        />
                    </Glucides>
                    <Lipides className={'Lipides'}>
                        <KeyData
                            dataCard={lipidCount}
                            dataName='Lipides'
                            key={`Lipides-${id}`}/>
                    </Lipides>
                </Infos>
                <Objectif className={'Objectif'}>
                    <LineChart id={id} />
                </Objectif>
                <Radar className={'Radar'}></Radar>
                <KPI className={'KPI'}></KPI>
            </Container>
    );
}

export default DashboardHome;

{/*<div>*/}
{/*    <div>*/}
{/*        /!*<KeyData dataCard={calorieCount} dataName='Calories' key={id}/>*!/*/}
{/*        /!*<KeyData dataCard={proteinCount} dataName='Proteines' key={id}/>*!/*/}
{/*        /!*<KeyData dataCard={carbohydrateCount} dataName='Glucides' key={id}/>*!/*/}
{/*        /!*<KeyData dataCard={lipidCount} dataName='Lipides' key={id}/>*!/*/}
{/*    </div>*/}
{/*    <ContainerNumberActivity>*/}
{/*        {createSpanNumberActivity()}*/}
{/*    </ContainerNumberActivity>*/}
{/*</div>*/}