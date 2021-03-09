"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = exports.Product = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Product = class Product {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Product.prototype, "likes", void 0);
Product = __decorate([
    mongoose_1.Schema()
], Product);
exports.Product = Product;
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
//# sourceMappingURL=product.model.js.map