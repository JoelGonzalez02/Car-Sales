import {ADD_FEATURES, REMOVE_FEATURES} from '../actions/carActions';



export const initialState = {
    additionalPrice: 0,
    car: {
      price: 25000,
      name: '2020 Chevrolet Camaro',
      image:
        'https://journal.classiccars.com/media/2020/03/Screen-Shot-2020-03-16-at-12.15.20-PM.png',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-8 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export const carReducer = (state = initialState, action) => {
      switch(action.type) {
          case ADD_FEATURES : 
            return {
                ...state,
                car: {price: state.car.price += action.payload.price, ...state.car, features: [...state.car.features, action.payload]}
            }
            case REMOVE_FEATURES : 
                return {
                    ...state,
                    car: {price: state.car.price -= action.payload.price, ...state.car, features: state.car.features.filter(feature => feature.id !== action.payload.id)}
                    }
            default: 
                return state;
                }
      }
  

