import React from 'react';
import { HashRouter,
         Route,
         Switch
} from 'react-router-dom';

import Header from './Header';
import Gallery from './Gallery';
import Search from './Search';
import NotAvailable from './NotAvailable';

const Container = (props) => {

    return(

      <HashRouter basename='/'>
        <div className="container">

          <Header formSubmit={props.formSubmit}
                  handleClick={props.handleClick}
            />

          {/* Loader gets activated if no content is on the page. */}
          {
          (props.loader)
          ? <div className="loading"><p className="loadtext">Loading..</p></div>
          :
          <Switch>
            {/* Routes */}
            <Route exact path="/" render={() => <Gallery data={props.data} title="Lighthouse" />} />

            <Route path="/lighthouse" render={() => <Gallery data={props.data} title="Lighthouse" />} />

            <Route path="/sunrise" render={() => <Gallery data={props.data} title="Sunrise" />} />

            <Route path="/mountains" render={() => <Gallery data={props.data} title="Mountains" />} />

            <Route exact path={`/search/:search`} render={({ match }) =>
              <Search
                data={props.data}
                title={props.search}
                tag={match.params.search}
              />} />

            <Route component={NotAvailable} />
          </Switch>
          }
        </div>
      </HashRouter>

    );
}

export default Container;
