import React from 'react';
import { ArticleList } from '../../ArticleList';
import renderer from 'react-test-renderer';
import { render } from 'react-native-testing-library';
import { FlatList } from 'react-native';
;
/* Mock Data */

const articleData = {
    "url": "https://www.nytimes.com/2019/05/19/business/deutsche-bank-trump-kushner.html",
    "adx_keywords": "Deutsche Bank AG;Trump, Donald J;Kushner, Jared;Banking and Financial Institutio" +
        "ns;Presidential Election of 2016;Money Laundering;United States Politics and Gov" +
        "ernment;Russian Interference in 2016 US Elections and Ties to Trump Associates;K" +
        "ushner Cos;Trump Organization;McFadden, Tammy",
    "column": null,
    "section": "Business",
    "byline": "By DAVID ENRICH",
    "type": "Article",
    "title": "Deutsche Bank Staff Saw Suspicious Activity in Trump and Kushner Accounts",
    "abstract": "Anti-money-laundering specialists proposed filing “suspicious activity reports” " +
        "about transactions connected to President Trump and Jared Kushner. Bank managers" +
        " said no.",
    "published_date": "2019-05-19",
    "source": "The New York Times",
    "id": 100000006486252,
    "asset_id": 100000006486252,
    "views": 1,
    "des_facet": [
      "BANKING AND FINANCIAL INSTITUTIONS", "PRESIDENTIAL ELECTION OF 2016", "MONEY LAUNDERING"
    ],
    "org_facet": [
      "DEUTSCHE BANK AG", "UNITED STATES POLITICS AND GOVERNMENT", "RUSSIAN INTERFERENCE IN 2016 US ELECTIONS AND TIES TO TRUMP ASSOCIATES", "KUSHNER COS", "TRUMP ORGANIZATION"
    ],
    "per_facet": [
      "TRUMP, DONALD J", "KUSHNER, JARED", "MCFADDEN, TAMMY"
    ],
    "geo_facet": "",
    "media": [
      {
        "type": "image",
        "subtype": "photo",
        "caption": "Tammy McFadden, a former Deutsche Bank employee, saw potentially suspicious tran" +
          "sactions involving the company of Jared Kushner, President Trump’s son-in-law an" +
          "d adviser, she said.",
        "copyright": "Willie J. Allen Jr. for The New York Times",
        "approved_for_syndication": 1,
        "media-metadata": [
          {
            "url": "https://static01.nyt.com/images/2019/05/13/business/00deutschetrump2/merlin_1546" +
                "40208_f27c634b-ab02-42af-8c94-10d4b01d8ddf-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75
          }, {
            "url": "https://static01.nyt.com/images/2019/05/13/business/00deutschetrump2/00deutschet" +
                "rump2-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210
          }, {
            "url": "https://static01.nyt.com/images/2019/05/13/business/00deutschetrump2/00deutschet" +
                "rump2-mediumThreeByTwo440.jpg",
            "format": "mediumThreeByTwo440",
            "height": 293,
            "width": 440
          }
        ]
      }
    ],
    "uri": "nyt://article/eab760cc-e3b3-53e0-ad48-2ea8b3af0a80"
  
  };

  const navigate = {
      navigate: {

      }
  }


/* Test for Article List* */

it('should render the Article List page correctly', () => {
    const wrapper = renderer.create(
        <ArticleList articleData ={articleData} navigate = { navigate }/>
        ).toJSON();
    expect(wrapper).toMatchSnapshot();
    
})