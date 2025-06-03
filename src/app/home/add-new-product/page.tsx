"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { Package, Upload, Save, RotateCcw } from "lucide-react";

const AddProduct: React.FC = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    description: "",
    tags: "",
    price: "",
    discount: "",
    discountCategory: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving product:", formData);
  };

  const handleDiscardChanges = () => {
    setFormData({
      productName: "",
      category: "",
      description: "",
      tags: "",
      price: "",
      discount: "",
      discountCategory: "",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Add Product
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Add new commodity to your inventory
            </p>
          </div>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg">
          <Package className="h-4 w-4 mr-2" />
          Add New Product
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle className="text-xl">Add New Product</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDiscardChanges}
                  className="text-red-600 border-red-200 hover:bg-red-50"
                >
                  Discard Change
                </Button>
                <Button
                  size="sm"
                  onClick={handleSave}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Save
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* General Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  General Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="productName">Product Name</Label>
                    <Input
                      id="productName"
                      name="productName"
                      placeholder="Product Name"
                      value={formData.productName}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Product Category</Label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                      <option value="">Product Category</option>
                      <option value="beverages">Beverages</option>
                      <option value="grains">Grains</option>
                      <option value="produce">Produce</option>
                      <option value="dairy">Dairy</option>
                      <option value="preserved">Preserved</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="tags">Tag Keywords</Label>
                    <Input
                      id="tags"
                      name="tags"
                      placeholder="Tag Keywords"
                      value={formData.tags}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Pricing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      name="price"
                      placeholder="Pricing"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="discount">Discount</Label>
                    <Input
                      id="discount"
                      name="discount"
                      placeholder="Discount"
                      value={formData.discount}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="discountCategory">Discount Category</Label>
                    <select
                      id="discountCategory"
                      name="discountCategory"
                      value={formData.discountCategory}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                      <option value="">Discount Category</option>
                      <option value="seasonal">Seasonal</option>
                      <option value="bulk">Bulk Purchase</option>
                      <option value="clearance">Clearance</option>
                      <option value="member">Member Discount</option>
                    </select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Image Upload */}
        <div className="space-y-6">
          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle className="text-lg">Preview Product</CardTitle>
              <CardDescription>Drag And Your Image Here</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Drag and drop here</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle className="text-lg">Thumbnail Product</CardTitle>
              <CardDescription>Drag And Your Image Here</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Drag and drop here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
