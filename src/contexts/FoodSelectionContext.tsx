import React, { createContext, useContext, useState, ReactNode } from "react";
import { FoodItem } from "@/data/foodCategories";

export interface SelectedFoodItem extends FoodItem {
  category: string;
}

interface FoodSelectionContextType {
  selectedItems: SelectedFoodItem[];
  addItem: (item: FoodItem, category: string) => void;
  removeItem: (itemName: string) => void;
  clearAll: () => void;
  isItemSelected: (itemName: string) => boolean;
}

const FoodSelectionContext = createContext<FoodSelectionContextType | undefined>(undefined);

export const FoodSelectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState<SelectedFoodItem[]>([]);

  const addItem = (item: FoodItem, category: string) => {
    setSelectedItems((prev) => {
      // Check if item already exists
      if (prev.some((selected) => selected.name === item.name)) {
        return prev;
      }
      return [...prev, { ...item, category }];
    });
  };

  const removeItem = (itemName: string) => {
    setSelectedItems((prev) => prev.filter((item) => item.name !== itemName));
  };

  const clearAll = () => {
    setSelectedItems([]);
  };

  const isItemSelected = (itemName: string) => {
    return selectedItems.some((item) => item.name === itemName);
  };

  return (
    <FoodSelectionContext.Provider
      value={{ selectedItems, addItem, removeItem, clearAll, isItemSelected }}
    >
      {children}
    </FoodSelectionContext.Provider>
  );
};

export const useFoodSelection = () => {
  const context = useContext(FoodSelectionContext);
  if (context === undefined) {
    throw new Error("useFoodSelection must be used within a FoodSelectionProvider");
  }
  return context;
};
