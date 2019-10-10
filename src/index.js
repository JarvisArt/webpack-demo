// import _ from 'loadsh';

// console.log(_.join(['a', 'b', 'c'], '——'));
// console.log(_.join(['a', 'b', 'c'], '——'));

function getComponent() {
  return import(/* webpackChunkName:"lodash" */'loadsh').then(({ default: _ }) => {
    var element = doucment.createElement('div');
    element.innerHTML = _.join(['Jarvis', 'Art'], '—')
    return element;
  })
}

getComponent().then(element => {
  doucment.body.appendChild(element);
})