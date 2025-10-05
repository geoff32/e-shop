import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import type { CartItem } from '../cart/cartSlice';
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';

interface OrderPDFProps {
  customer: {
    lastName: string;
    firstName: string;
    email: string;
    children: Array<{
      lastName: string;
      firstName: string;
      class: string;
    }>;
  };
  items: CartItem[];
  total: number;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  section: {
    marginBottom: 20,
  },
  childSection: {
    marginBottom: 15,
    paddingLeft: 10,
  },
  childTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    width: 150,
  },
  value: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 5,
    borderBottom: '1px solid #eee',
    paddingBottom: 5,
  },
  itemName: {
    flex: 2,
  },
  itemQuantity: {
    flex: 1,
  },
  itemPrice: {
    flex: 1,
    textAlign: 'right',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    paddingTop: 10,
    borderTop: '2px solid #000',
  },
  totalLabel: {
    fontWeight: 'bold',
    marginRight: 20,
  },
  qrCode: {
    marginTop: 30,
    alignItems: 'center',
  },
  qrCodeImage: {
    width: 128,
    height: 128,
  },
});

const OrderPDF = ({ customer, items, total }: OrderPDFProps): ReactElement => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    const generateQRCode = async (): Promise<void> => {
      try {
        const qrData = JSON.stringify({
          customer,
          items,
          total,
          date: new Date().toISOString(),
        });

        const url = await QRCode.toDataURL(qrData, {
          width: 128,
          margin: 4,
          errorCorrectionLevel: 'M',
        });

        setQrCodeUrl(url);
      } catch (error) {
        if (error instanceof Error) {
          console.error('Erreur lors de la génération du QR code:', error.message);
        }
      }
    };

    void generateQRCode();
  }, [customer, items, total]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Bon de commande</Text>
            <Text>Date : {new Date().toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' })}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Informations client</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Nom :</Text>
            <Text style={styles.value}>{customer.lastName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Prénom :</Text>
            <Text style={styles.value}>{customer.firstName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Email :</Text>
            <Text style={styles.value}>{customer.email}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Informations enfants</Text>
          {customer.children.map((child, index) => (
            <View key={index} style={styles.childSection}>
              <Text style={styles.childTitle}>Enfant {index + 1}</Text>
              <View style={styles.row}>
                <Text style={styles.label}>Nom :</Text>
                <Text style={styles.value}>{child.lastName}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Prénom :</Text>
                <Text style={styles.value}>{child.firstName}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Classe :</Text>
                <Text style={styles.value}>{child.class}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Détails de la commande</Text>
          {items.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemQuantity}>x{item.quantity}</Text>
              <Text style={styles.itemPrice}>{(item.price * item.quantity).toFixed(2)}€</Text>
            </View>
          ))}
          <View style={styles.total}>
            <Text style={styles.totalLabel}>Total :</Text>
            <Text>{total.toFixed(2)}€</Text>
          </View>
        </View>

        <View style={styles.qrCode}>
          {qrCodeUrl && <Image src={qrCodeUrl} style={styles.qrCodeImage} />}
        </View>
      </Page>
    </Document>
  );
};

export default OrderPDF;