import React from 'react';
import { Route } from 'react-router-dom';
import Exercicios from './navegacao_convivendo_cancer/exercicios';
import Bioetica from './navegacao_convivendo_cancer/bioetica';
import CardioOncologia from './navegacao_convivendo_cancer/cardio_oncologia';
import MedicinaIntegrada from './navegacao_convivendo_cancer/medicina_integrativa';
import Nutricao from './navegacao_convivendo_cancer/nutricao';
import Odontologia from './navegacao_convivendo_cancer/odontologia';
import SaudeMental from './navegacao_convivendo_cancer/saude_mental';
import ControleDeDor from './navegacao_convivendo_cancer/controle_de_dor';

export const ConteudoRoute = () => (
    <React.Fragment>

      <Route path='/Exercicios' element={<Exercicios/>}/>
      <Route path='/Bioetica' element={<Bioetica/>}/>
      <Route path='/CardioOncologia' element={<CardioOncologia/>}/>
      <Route path='/MedicinaIntegrada' element={<MedicinaIntegrada/>}/>
      <Route path='/Nutricao' element={<Nutricao/>}/>
      <Route path='/Odontologia' element={<Odontologia/>}/>
      <Route path='/SaudeMental' element={<SaudeMental/>}/>
      <Route path='/ControleDeDor' element={<ControleDeDor/>}/>

    </React.Fragment>
  )
  