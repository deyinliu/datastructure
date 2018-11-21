#include "iostream"
using namespace std;
int main(){
    int n , m;
    cin >> n >> m;
    int a[n];
    for(int i = 0; i < n; i++){
        cin >> a[i];
    }
    m = m % n;
    if(m != 0){
        int start = n - m;
        int flag = -1;
        for(int j = n-m; j < n; j++){
            flag++;
            for(int p = j-1; p >=flag; p--){
                swap(a[p+1] , a[p]);
            }
        }
    }
    for(int q = 0; q < n - 1; q++){
        cout<< a[q] << " ";
    }
    cout << a[n-1];
    return 0;
}