import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from '../Header/Header';
import MainPage from '../Content/MainPage/MainPage';
import Footer from '../Footer/Footer';

class App extends React.Component {

  

    /* state = {
    strap: [],
    error: null
  }

  componentDidMount = async () => {
    const parseJSON = (resp) => (resp.json ? resp.json() : resp);
    const checkStatus = (resp) => {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }
      return parseJSON(resp).then((resp) => {
        throw resp;
      });
    };
    const headers = {
      'Content-Type': 'application/json',
    };
  try {
  const strap = await fetch('Здесь будет запрос на api', {
          method: "GET",
          headers: headers,
        }).then(checkStatus)
          .then(parseJSON);
          this.setState({ strap });
      } catch (error) {
        this.setState({ error })
      }
    }*/
    /*ЗАКОМЕНТИРОВАННЫЙ КОД ПОЛУЧЕНИЯ ДАННЫХ ИЗ СЕРВЕРА*/
    render() {
        /*const { error, strap } = this.state
if (error) {
  return <div>An error occured: {error.message}</div>
}*/

        const json = require('../json/quotations.json');/*(Тестовый запрос) иммитируем получение данных из сервера о курсе биткоина.*/

        return (
            <BrowserRouter>
                <Header data_quotation={json}/>
                <Route path='/' component={MainPage} exact={true}/>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;