import avro from 'avsc';

export default avro.Type.forSchema({
    type: 'record',
    name: 'Pet',
    fields: [
        {
        name: 'categoria',
        type: {type: 'enum', name: 'PetKind', symbols: ['Gato', 'Cachorro']}
        },
        {
        name: 'raca',
        type: 'string'
        }
    ]
},
{wrapUnions: false}
);