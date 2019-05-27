import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { getArticlesData } from '../services/NYTimesAPI';
import  { ArticleList }  from '../components/ArticleList';


/* Component rendering Article list fetching from NyTimesAPI */

export class ArticleHome extends Component {
  constructor(){
    super();
    this.state = {
      articlesData: {},
      isLoading: true 
    }
  }
  
  componentDidMount(){
    this.getArticlesData();
  }

  /* Handling response from Nytimes API */

  handleResponse = (response) => {
    this.setState({
      articlesData: response,
      isLoading: false
    })
  }

  /* Handling response from Nytimes API */

  handleError = (e) => {
    console.log('error in fetching',e)
  }

  /* Fetching data from NyTimess service */

  getArticlesData = async () => {
    const response = await getArticlesData().catch(e => {
      this.handleError(e);
    })
    this.handleResponse(response);
  }

  render(){
    const { results } = this.state.articlesData;
    const { navigate } = this.props.navigation;
    const loaderView = <ActivityIndicator size="large" color="#00ff00" />;
    const articleListView =  <ArticleList articlesData = {results} navigate = {navigate}/>;
    return (
      <View>
        { this.state.isLoading ? loaderView : articleListView } 
      </View>
     
    )
  }
}