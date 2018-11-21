#include "iostream"
#include "vector"
using namespace std;
int temp[10000];
int main(){
    int n, k;
    cin >> n;
    vector<int> v(n);
    for(int i = 0; i < n; i++){
        cin >> k;
        v[i] = k;
        while(k != 1){
            if(k % 2 != 0){
                k = 3 * k + 1;
            }else{
                k = k / 2;
            }
            if(temp[k] == 1){
                break;
            }else{
                temp[k] = 1;
            } 
        }  
    }
    int len = v.size();
    for(int i = 0; i < len; i++){
        for(int j= i+1; j > 0; j--){
            if(v[j-1] < v[j]){
                swap(v[j-1] , v[j]);
            }
        }
    }
    int flag = 0;
    for (int i = 0; i < len; i++) {
        if (temp[v[i]] == 0) {
            if (flag == 1){
                cout << " ";
            }
            cout << v[i];
            flag = 1;
        }
    }
    return 0;
}