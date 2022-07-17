import store from './index'
import { change } from './action/student/searchCondition'
import { setLoading, setStudentsAndTotal, fetchStudent } from './action/student/searchResult';


// store.dispatch(change({ key: 'abc', sex: 0 }));

// store.dispatch(setLoading(true))

store.dispatch(fetchStudent());