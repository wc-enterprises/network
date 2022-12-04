# Add angular app

nx generate @nrwl/angular:app <app-name> --routing

# Add nest app

nx generate @nrwl/nest:app <app-name>

To run an app, execute following command in route folder
npx nx s <api-name>
eg: npx nx s api , npx nx s network

Angular team can start integrating the endpoints to the frontend. I have added a sample integration file in welcome.component.ts

For request interfae check utils or import the insomnia json.
