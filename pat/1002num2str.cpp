#include "iostream"
#include "string"

using namespace std;

string num2str(string n){
    int sum = 0;
    for(unsigned int i = 0; i < n.length(); i++)
    {
        sum = sum + (n[i]-'0');
    }

    const string strArr[] = {"ling","yi","er","san","si","wu","liu","qi","ba","jiu"};
    
    string t = to_string(sum);
    string temp = "";
    string end=" ";
    for(unsigned int i = 0; i < t.length(); i++)
    {
        if(i == t.length()-1){
            end = "";
        }
        temp = temp + strArr[t[i]-'0'] + end;
    }  
    return temp;
}

int main(int argc, char const *argv[])
{
    string n;
    cout<<"请输入一个整数："<<endl;
    cin >> n;
    string str = num2str(n);
    cout<< str << endl;
    return 0;
}
