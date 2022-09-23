const findBy = (prop, value) => (element) => (element[prop] === value);


export default findBy;