module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement === 20) {
    
    return {...item}

  } else {

    return { ...item,
             enhancement: item.enhancement + 1
      };
  }
  
}

function fail(item) {
  if (item.enhancement > 16) {
    
    return {...item,
            enhancement: item.enhancement - 1
    }

  } else if (item.enhancement >= 15) {
    
    return {...item,
            enhancement: item.enhancement - 10
    }
    
  } else {

    return { ...item,
             enhancement: item.enhancement - 5
      };
  };
}

function repair(item) {
  return { ...item,
           durability: 100
  };
}

function get(item) {
  return { ...item };
}
