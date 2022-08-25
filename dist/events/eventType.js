"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const avsc_1 = __importDefault(require("avsc"));
exports.default = avsc_1.default.Type.forSchema({
    type: 'record',
    name: 'Pet',
    fields: [
        {
            name: 'categoria',
            type: { type: 'enum', name: 'PetKind', symbols: ['Gato', 'Cachorro'] }
        },
        {
            name: 'raca',
            type: 'string'
        }
    ]
}, { wrapUnions: false });
