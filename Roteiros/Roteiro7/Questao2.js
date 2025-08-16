// ============ Questão 2 =============

const nParamFunction = (...args) => {

    return args.some((currentItem, index) => {
        
        const duplicateIndex = args.findIndex((otherItem, otherIndex) => {
            return otherItem === currentItem && otherIndex != index
        });

        return duplicateIndex !== -1
    });
};

console.log(nParamFunction(1, 2, 3, 4, "2", 5))