import { Component, OnInit } from '@angular/core';
import { Angular2Apollo, ApolloQueryObservable } from 'angular2-apollo';

// We need this to parse graphql string
import gql from 'graphql-tag';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Observable with GraphQL result
  public hello: ApolloQueryObservable<any>;

  private apollo: Angular2Apollo;

  // Inject Angular2Apollo service
  constructor(apollo: Angular2Apollo) {
    this.apollo = apollo;
  }

  public ngOnInit() {
    this.hello = this.apollo.watchQuery({
      query: gql`
        query { 
          hello
        }
      `
    })
      .map(result => {
        console.log(result.data);
        return result.data.hello;
      }) as ApolloQueryObservable<any>;
  }

}
