import delay from './delay';

const links = [
  {
    id: '6'
  },
  {
    id: '1'
  }
];

class LinkApi {
  static getAllLinks() {
    console.log("Mock API processing request data response");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], links));
      }, delay);
    });
  }
}

export default LinkApi;
