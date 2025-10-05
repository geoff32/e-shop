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
    padding: 12,
  },
  section: {
    marginBottom: 10,
  },
  childSection: {
    marginBottom: 7,
    paddingLeft: 4,
  },
  childTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  header: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  qrCode: {
    marginLeft: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  qrCodeImage: {
    width: 64,
    height: 64,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  label: {
    fontWeight: 'bold',
    width: 80,
    fontSize: 9,
  },
  value: {
    flex: 1,
    fontSize: 9,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 2,
    borderBottom: '1px solid #eee',
    paddingBottom: 2,
  },
  itemName: {
    flex: 2,
    fontSize: 9,
  },
  itemQuantity: {
    flex: 1,
    fontSize: 9,
  },
  itemPrice: {
    flex: 1,
    textAlign: 'right',
    fontSize: 9,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 4,
    paddingTop: 4,
    borderTop: '1px solid #000',
  },
  totalLabel: {
    fontWeight: 'bold',
    marginRight: 8,
    fontSize: 10,
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
          width: 64,
          margin: 2,
          errorCorrectionLevel: 'M'
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
          <View>
            <Text style={styles.title}>Bon de commande</Text>
            <Text>Date : {new Date().toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' })}</Text>
          </View>
          <View style={styles.qrCode}>
            {qrCodeUrl && <Image src={qrCodeUrl} style={styles.qrCodeImage} />}
          </View>
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
            <Text>{total}€</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default OrderPDF;