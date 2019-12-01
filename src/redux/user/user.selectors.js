import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

// export const selectUserItemsCount = createSelector(
//   [selectUserItems],
//   userItems =>
//     userItems.reduce(
//       (accumulatedQuantity, userItem) =>
//         accumulatedQuantity + userItem.quantity,
//       0
//     )
// );
