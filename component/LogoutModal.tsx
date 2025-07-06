import { Button, Modal, StyleSheet, Text, View } from "react-native";

interface ModalProps {
  closeModal: () => void;
  logout: () => void;
  visible: boolean;
}

const LogoutModal = ({ visible, logout, closeModal }: ModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <View style={styles.backdrop}>
        <View style={styles.modalContent}>
          <Text style={{ fontSize: 18 }}>Are you sure you want to logout?</Text>
          <View
            style={{
              justifyContent: "space-between",
              gap: 10,
              width: "100%",
            }}
          >
            <Button
              title="no, close modal"
              color={"blue"}
              onPress={closeModal}
            />
            <Button title="yes, logout" color={"red"} onPress={logout} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 10,
  },
});
