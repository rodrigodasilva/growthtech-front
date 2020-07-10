// import * as actions from './actions';
// import types from './types';

// describe('actions', () => {
//   it('should create an action to request a did number', () => {
//     const expectedAction = {
//       type: types.CREATE_REQUEST,
//       payload: {
//         didNumber: {
//           id: 1,
//           value: '+55 84 91234-4321',
//           monthyPrice: '0.03',
//           setupPrice: '3.40',
//           currency: 'U$',
//         },
//       },
//     };
//     expect(
//       actions.createRequest({
//         id: 1,
//         value: '+55 84 91234-4321',
//         monthyPrice: '0.03',
//         setupPrice: '3.40',
//         currency: 'U$',
//       })
//     ).toEqual(expectedAction);
//   });

//   it('should create an action of type success when we add a did number', () => {
//     const expectedAction = {
//       type: types.CREATE_SUCCESS,
//       payload: {
//         success: true,
//       },
//     };
//     expect(
//       actions.createSuccess({
//         success: true,
//       })
//     ).toEqual(expectedAction);
//   });

//   it('should create an action of type faliure when we add a did number', () => {
//     const expectedAction = {
//       type: types.CREATE_FAILURE,
//       payload: {
//         success: false,
//       },
//     };
//     expect(
//       actions.createFailure({
//         success: false,
//       })
//     ).toEqual(expectedAction);
//   });
// });
