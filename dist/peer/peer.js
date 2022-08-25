"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kafkajs_1 = require("../../node_modules/kafkajs");
const eventType_1 = __importDefault(require("../events/eventType"));
const kafka = new kafkajs_1.Kafka({
    clientId: 'api',
    brokers: ['localhost:9092'],
    logLevel: kafkajs_1.logLevel.WARN,
    retry: {
        initialRetryTime: 300,
        retries: 10
    },
});
setInterval(() => {
    produce().catch(console.error);
}, 3000);
const producer = kafka.producer({ createPartitioner: kafkajs_1.Partitioners.LegacyPartitioner });
const consumer1 = kafka.consumer({ groupId: 'my-group1' });
const consumer2 = kafka.consumer({ groupId: 'my-group2' });
const consumer3 = kafka.consumer({ groupId: 'my-group3' });
const consumer4 = kafka.consumer({ groupId: 'my-group4' });
const consumer5 = kafka.consumer({ groupId: 'my-group5' });
const consumer6 = kafka.consumer({ groupId: 'my-group6' });
const consumer7 = kafka.consumer({ groupId: 'my-group7' });
const consumer8 = kafka.consumer({ groupId: 'my-group8' });
const topic = 'topic';
const produce = () => __awaiter(void 0, void 0, void 0, function* () {
    const categoria = getRandomAnimal();
    const raca = getRandomBreed(categoria);
    const evento = { categoria, raca };
    yield producer.connect();
    yield producer.send({
        topic,
        messages: [
            { value: eventType_1.default.toBuffer(evento) },
        ],
    });
    if (producer) {
        console.log('A mensagem foi escrita com sucesso');
    }
    else {
        console.log('Algo deu errado');
    }
});
const consume = () => __awaiter(void 0, void 0, void 0, function* () {
    consumer1.connect();
    consumer1.subscribe({ topic, fromBeginning: true });
    consumer1.run({
        eachMessage: ({ partition, message }) => __awaiter(void 0, void 0, void 0, function* () {
            console.log('consumer-1', {
                partition,
                offset: message.offset,
                value: eventType_1.default.fromBuffer(message.value),
            });
        }),
    });
    consumer2.connect();
    consumer2.subscribe({ topic, fromBeginning: true });
    consumer2.run({
        eachMessage: ({ partition, message }) => __awaiter(void 0, void 0, void 0, function* () {
            console.log('consumer-2', {
                partition,
                offset: message.offset,
                value: eventType_1.default.fromBuffer(message.value),
            });
        }),
    });
    consumer3.connect();
    consumer3.subscribe({ topic, fromBeginning: true });
    consumer3.run({
        eachMessage: ({ partition, message }) => __awaiter(void 0, void 0, void 0, function* () {
            console.log('consumer-3', {
                partition,
                offset: message.offset,
                value: eventType_1.default.fromBuffer(message.value),
            });
        }),
    });
    consumer4.connect();
    consumer4.subscribe({ topic, fromBeginning: true });
    consumer4.run({
        eachMessage: ({ partition, message }) => __awaiter(void 0, void 0, void 0, function* () {
            console.log('consumer-4', {
                partition,
                offset: message.offset,
                value: eventType_1.default.fromBuffer(message.value),
            });
        }),
    });
    consumer5.connect();
    consumer5.subscribe({ topic, fromBeginning: true });
    consumer5.run({
        eachMessage: ({ partition, message }) => __awaiter(void 0, void 0, void 0, function* () {
            console.log('consumer-5', {
                partition,
                offset: message.offset,
                value: eventType_1.default.fromBuffer(message.value),
            });
        }),
    });
    consumer6.connect();
    consumer6.subscribe({ topic, fromBeginning: true });
    consumer6.run({
        eachMessage: ({ partition, message }) => __awaiter(void 0, void 0, void 0, function* () {
            console.log('consumer-6', {
                partition,
                offset: message.offset,
                value: eventType_1.default.fromBuffer(message.value),
            });
        }),
    });
    consumer7.connect();
    consumer7.subscribe({ topic, fromBeginning: true });
    consumer7.run({
        eachMessage: ({ partition, message }) => __awaiter(void 0, void 0, void 0, function* () {
            console.log('consumer-7', {
                partition,
                offset: message.offset,
                value: eventType_1.default.fromBuffer(message.value),
            });
        }),
    });
    consumer8.connect();
    consumer8.subscribe({ topic, fromBeginning: true });
    consumer8.run({
        eachMessage: ({ partition, message }) => __awaiter(void 0, void 0, void 0, function* () {
            console.log('consumer-8', {
                partition,
                offset: message.offset,
                value: eventType_1.default.fromBuffer(message.value),
            });
        }),
    });
});
function getRandomAnimal() {
    const categorias = ['Gato', 'Cachorro'];
    return categorias[Math.floor(Math.random() * categorias.length)];
}
;
function getRandomBreed(animal) {
    if (animal === 'Gato') {
        const raca = [
            'Persa',
            'Maine Coon',
            'Sphynx',
            'Siamês',
            'Ragdoll',
            'Angorá',
            'Siberiano',
            'Scottish Fold',
            'Munchkin'
        ];
        return raca[Math.floor(Math.random() * raca.length)];
    }
    else if (animal === 'Cachorro') {
        const raca = [
            'Labrador',
            'Buldogue',
            'Shar-Pei',
            'Golden retriever',
            'Poodle',
            'Vira lata',
            'Pastor alemão',
            'Rottweiler'
        ];
        return raca[Math.floor(Math.random() * raca.length)];
    }
}
;
consume().catch(console.error);
// pm2 monit  
// pm2 start pier.js -i max   
// pm2 logs
// pm2 start pm2.json
// pm2 status     mostra a tabela de alocacao
