import { useState } from "react";
import { ShoppingBag, X, Trash2, Send } from "lucide-react";
import { useFoodSelection } from "@/contexts/FoodSelectionContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { services } from "@/data/services";

export const SelectedMenuPanel = () => {
  const { selectedItems, removeItem, clearAll } = useFoodSelection();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    eventDate: "",
  });

  const handleRemove = (itemName: string) => {
    removeItem(itemName);
    toast.success("Item removed from your menu");
  };

  const handleSendToWhatsApp = () => {
    // Validate form
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in your name and phone number");
      return;
    }

    if (selectedItems.length === 0) {
      toast.error("Please select at least one menu item");
      return;
    }

    // WhatsApp business number (from contact page)
    const whatsappNumber = "919164060961";

    // Format selected items
    const menuItems = selectedItems.map((item) => `• ${item.name}`).join("\n");

    // Create WhatsApp message
    const message = `Hello, I would like to request a catering menu.

Name: ${formData.name}
Phone: ${formData.phone}
${formData.service ? `Service: ${formData.service}` : ""}
${formData.eventDate ? `Event Date: ${formData.eventDate}` : ""}

Selected Menu Items:
${menuItems}

Please contact me regarding this request.`;

    // Encode and open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast.success("Opening WhatsApp...");
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground rounded-full px-6 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 font-semibold"
        aria-label="View selected menu"
      >
        <ShoppingBag className="h-5 w-5" />
        <span>Selected Menu ({selectedItems.length})</span>
      </button>

      {/* Side Panel Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[200] backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-background z-[201] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-heading font-semibold">Your Selected Menu</h2>
            <p className="text-sm opacity-90 mt-1">{selectedItems.length} items selected</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-white/20 p-2 rounded-full transition-colors"
            aria-label="Close panel"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Selected Items List */}
          {selectedItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground opacity-30 mb-4" />
              <p className="text-muted-foreground text-lg">No items selected yet</p>
              <p className="text-sm text-muted-foreground mt-2">
                Browse our menu and add items to get started
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-3">
                {selectedItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 bg-card border border-border rounded-xl p-3 group hover:shadow-md transition-shadow"
                  >
                    {/* Image */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">{item.category}</p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemove(item.name)}
                      className="flex-shrink-0 p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Clear All Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  clearAll();
                  toast.success("All items cleared");
                }}
                className="w-full"
              >
                Clear All
              </Button>
            </>
          )}

          {/* Request Form */}
          {selectedItems.length > 0 && (
            <div className="border-t border-border pt-6 space-y-4">
              <h3 className="font-heading text-xl font-semibold">Menu Request Details</h3>

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              {/* Service */}
              <div className="space-y-2">
                <Label htmlFor="service">Select Service</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Choose event type" />
                  </SelectTrigger>
                  <SelectContent className="z-[300]">
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.label}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Event Date */}
              <div className="space-y-2">
                <Label htmlFor="eventDate">Event Date</Label>
                <Input
                  id="eventDate"
                  type="date"
                  min={getTodayDate()}
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                />
              </div>

              {/* Send Button */}
              <Button
                onClick={handleSendToWhatsApp}
                className="w-full gap-2"
                size="lg"
              >
                <Send className="h-4 w-4" />
                Send Menu Request
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
