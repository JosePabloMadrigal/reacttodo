var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');


describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', ()=> {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Dog'
      };
      var red = reducers.searchTextReducer(df(''), df(action));
      expect(red).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle ShowCompleted', ()=> {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var red = reducers.showCompletedReducer(df(false), df(action));
      expect(red).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Study Junit'
      };
      var red = reducers.todosReducer([], df(action));
      expect(red.length).toEqual(1);
      expect(red[0].text).toEqual(action.text);
    });
    it('should toggle todo', () => {
      var todos = [{
        id: '123',
        type: 'ADD_TODO',
        text: 'Study Junit',
        createdAt: 123,
        completed: true,
        completedat: 125
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: '123'
      };
      var res = reducers.todosReducer(df(todos),df(action));
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);

    });
  });

});
